import className from "classnames";
import styles from "./styles.module.scss";

interface IData {
  imageUrl: string;
  description: string;
}

interface IProps {
  data: IData[];
  title?: string;
  classname?: string;
}
const ItemList = ({ data, title = "information", classname }: IProps) => {
  const classnames = className(classname, styles.wrapItemList);

  const _renderListItem = () => {
    if (!data?.length) return null;
    return data?.map((item: IData, index: number) => (
      <li key={index}>
        <p>{item?.description}</p>
      </li>
    ));
  };

  return (
    <div className={classnames}>
      <div
        className={className(styles.wrapItemList_title, {
          [`${classnames}_title`]: classnames,
        })}
      >
        {title}
      </div>
      <div
        className={className(styles.wrapItemList_content, {
          [`${classnames}_content`]: classnames,
        })}
      >
        <ul>{_renderListItem()}</ul>
      </div>
    </div>
  );
};

export default ItemList;
