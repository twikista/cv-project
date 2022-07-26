import { Link } from "react-router-dom";
import styles from "./WelcomePage.module.css";
import heroImage from "../assets/hero_image.jpg";

const WelcomePage = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.left_wrapper}>
        <div className={styles.styling_div}>
          <div className={styles.top_left}>
            <h1 className={styles.heading}>Best free online Resume builder</h1>
            <h4 className={styles.tagline}>
              &emsp; &emsp; &#8210; your resume is just a few clicks away
            </h4>
          </div>
          <Link to={"new-resume"} className={styles.link}>
            Build your Resume
          </Link>
        </div>
      </div>

      <div
        className={styles.right_wrapper}
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
    </div>
  );
};

export default WelcomePage;
