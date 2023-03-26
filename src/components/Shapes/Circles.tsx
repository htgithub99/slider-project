import className from "classnames";
import styles from "./styles.module.scss";

interface IProps {
  classname?: string;
}
const Circles = ({ classname }: IProps) => {
  const classnames = className(classname, styles.wrapCircles);
  return <div className={classnames}></div>;
};

export default Circles;
