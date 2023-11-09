import { useParams } from "react-router-dom";
import { Link } from "../../components/common/Link.component";
import { Button } from "../../components/common/Button.component";

export const ErrorPage = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <img src={"https://http.cat/" + id ?? "404"} alt={id ?? "404"} />
      <Link to={"/"} className="py-4">
        <Button className="py-2 px-4">HOME</Button>
      </Link>
    </div>
  );
};
