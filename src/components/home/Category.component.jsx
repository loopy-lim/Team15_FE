import { Txt } from "../common/Txt.component";

const categorys = [
  { title: "IT", imgSrc: "/images/categorys/it.png" },
  { title: "도서", imgSrc: "/images/categorys/book.png" },
  { title: "의류", imgSrc: "/images/categorys/suit.png" },
  { title: "악기", imgSrc: "/images/categorys/instrument.png" },
];

export const HomeCategory = () => {
  return (
    <div className="flex gap-4 justify-between">
      {categorys.map((category) => (
        <button
          key={category.title}
          className="flex flex-1 flex-col items-center py-2 px-4 bg-[#F1F1F1] rounded-2xl"
        >
          <img
            src={category.imgSrc}
            alt={category.title}
            className="w-full h-full p-2"
          />
          <Txt className="text-sm">{category.title}</Txt>
        </button>
      ))}
    </div>
  );
};
