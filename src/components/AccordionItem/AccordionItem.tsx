import classNames from "classnames";
import { useState } from "react";

import { Post } from "../../utils/types";
import * as styles from "./AccordionItem.scss";

const cx = classNames.bind(styles);

const AccordionItem = ({ item }: { item: Post }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="accordion__item" key={item.id}>
      <button
        className="accordion-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "- " : "+ "}
        {item.title}
      </button>
      <p
        className={cx("accordion__content", {
          hidden: !open,
        })}
      >
        {item.body}
      </p>
    </div>
  );
};

export default AccordionItem;
