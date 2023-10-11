import { forwardRef } from "react";
import { useHref, useLinkClickHandler } from "react-router-dom";

/**
 * @param {{
 *  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
 *  replace?: boolean
 *  state?: any
 *  target?: string
 *  to: string
 * }}
 */
export const Link = forwardRef(
  ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
    const href = useHref(to);
    const handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target,
    });

    return (
      <a
        {...rest}
        href={href}
        onClick={(event) => {
          onClick?.(event);
          if (!event.defaultPrevented) {
            handleClick(event);
          }
        }}
        ref={ref}
        target={target}
      />
    );
  }
);
