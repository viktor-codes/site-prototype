import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../data/index";
const Grid = () => {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={i}
                        title={item.title}
                        description={item.description}

                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
