import { Link } from "react-router-dom";
import { EmojiEmotions } from "@mui/icons-material";

function Leftside() {
  return (
    <div className="left-side">
      <p>
        Welcome to our website! We're thrilled to have you here. Explore our
        platform and discover the tools and resources that will help you achieve
        your goals. Get ready to boost your productivity and stay organized with
        our innovative task management solution.
      </p>
      <p className="slogan">
        Unleash your productivity potential and conquer your goals effortlessly.
        <EmojiEmotions className="face"/>
      </p>

      <Link to="/login" className="get-started">
        {" "}
        <button>Get Started</button>{" "}
      </Link>
    </div>
  );
}

export default Leftside;
