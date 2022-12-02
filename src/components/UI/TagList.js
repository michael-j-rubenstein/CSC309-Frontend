import Tag from "./Tag";
import styles from "./TagList.module.css";

const TagList = (props) => {
  return (
    <div className={styles["tag-list"]}>
      <Tag>Ammenity 1</Tag>
      <Tag>Ammenity 2</Tag>
      <Tag>Blah</Tag>
      <Tag>BalhBlah</Tag>
      <Tag>BalhBlah</Tag>
      <Tag>BalhBlah</Tag>
      <Tag>BalhBlah</Tag>
      <Tag>BalhBlah</Tag>
    </div>
  );
};

export default TagList;
