
import { CardInfoAnalitcs } from '../CardInfoAnalitcs';

type PropsPerfil = {
  data: any
};

export const AnalitcsCards = ({ data }: PropsPerfil) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <CardInfoAnalitcs
        item={{
          title: 'Meus links',
          value: data?.qtdLink || 0,
          icon: 'MdPages',
        }}
      />

      <CardInfoAnalitcs
        item={{
          title: 'Visitas nos links',
          value: data?.visit || 0,
          icon: 'MdOutlineAnalytics',
        }}
      />
      <CardInfoAnalitcs
        item={{
          title: 'Minha Paginas',
          value: data?.countCatalogs || 0,
          icon: 'MdOutlineAnalytics',
        }}
      />

    </div>
  );
};
