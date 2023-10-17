import { forwardRef } from "react";
import { useHref, useLinkClickHandler } from "react-router-dom";

/**
 * @typedef {{
 *  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
 *  replace?: boolean
 *  state?: any
 *  target?: string
 *  to: string
 * }} LinkProps
 * @typedef {React.PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement<ButtonProps>>>} LinkPropsWithChildren
 */
// TODO: type이 제대로 지정 안되어 있음
/**@type {React.ForwardRefExoticComponent<LinkPropsWithChildren & React.RefAttributes<HTMLAnchorElement>>}*/
export const Link = forwardRef(
  (
    /** @type {LinkPropsWithChildren} */
    { onClick, replace = false, state, target, to, children, ...props },
    ref
  ) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });

    return (
      <a
        {...props}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        }}
        ref={ref}
        target={target}
      >
        {children}
      </a>
    );
  }
);
