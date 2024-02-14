import { Post } from "../../utils/types";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ items }: { items: Post[] }) => {
  return (
    <div>
      {items?.length
        ? items.map((item: Post) => <AccordionItem item={item} key={item.id} />)
        : null}
    </div>
  );
};

export default Accordion;
