'use client';

import { Category } from '@prisma/client';
import {
  FcEngineering,
  FcFilmReel,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcSportsMode,
} from 'react-icons/fc';
import { IconType } from 'react-icons';
import { GrAnalytics } from 'react-icons/gr';
import { GiClothes } from 'react-icons/gi';
import { SiCodesignal, SiNginxproxymanager } from 'react-icons/si';
import { CategoryItem } from './category-item';
import {RiSpeakFill} from "react-icons/ri";
import {MdEngineering} from "react-icons/md"
import {AiFillCamera} from "react-icons/ai"
interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category['name'], IconType> = {
  'Data Analytics': GrAnalytics,
  Photography: AiFillCamera,
  'Fashion Designing': GiClothes,
  Languages: RiSpeakFill,
  'Software Engineering': MdEngineering,
  'Graphics Designing': SiCodesignal,
  'Product Management': SiNginxproxymanager,
};

export const Categories = ({ items }: CategoriesProps) => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto pb-2'>
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
