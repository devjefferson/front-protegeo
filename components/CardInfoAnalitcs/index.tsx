import IconComponent, { IconNameProps } from '@/components/Icon';

type TCardAnalitcs = {
  item: {
    title: string;
    value: number | string;
    last?: number | string;
    icon: IconNameProps;
  };
};
export const CardInfoAnalitcs = ({ item }: TCardAnalitcs) => {
  return (
    <div className="relative flex flex-col justify-between bg-clip-border  bg-white text-gray-700  shadow-md">
      <div className="bg-clip-border mx-4  overflow-hidden bg-gradient-to-tr from-primary to-primary/60 text-white shadow-primary/40 shadow-md absolute -mt-1 grid h-16 w-16 place-items-center">
        <IconComponent name={item.icon || 'Md16Mp'} size={32} />
      </div>
      <div className="p-4 text-right flex flex-col justify-end items-end gap-2 ">
        <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600 w-3/5">
          {item.title}
        </p>
        <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
          {item.value}
        </h4>
      </div>
      {item.last && (
        <div className="border-t border-blue-gray-50 p-4">
          <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
            <strong className="text-green-500">{item.last}</strong>&nbsp;than
            last week
          </p>
        </div>
      )}
    </div>
  );
};
