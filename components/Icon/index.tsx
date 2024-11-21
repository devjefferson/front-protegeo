import React from 'react';
import * as AntDesignIcons from 'react-icons/ai';
import * as BoxIcons from 'react-icons/bi';
import * as BootstrapIcons from 'react-icons/bs';
import * as FontAwesome from 'react-icons/fa';
import * as FcAbout from 'react-icons/fc';
import * as Feather from 'react-icons/fi';
import * as IonIcons4 from 'react-icons/io';
import * as IonIcons5 from 'react-icons/io5';
import * as MaterialDesign from 'react-icons/md';
import * as RemixIcon from 'react-icons/ri';

export const icons = {
  pwa: IonIcons5.IoLogoPwa,
  playstore: IonIcons5.IoLogoGooglePlaystore,
  flagRace: FontAwesome.FaFlagCheckered,
  chevronLeft: MaterialDesign.MdChevronLeft,
  chevronRight: MaterialDesign.MdChevronRight,
  chevronRightDouble: AntDesignIcons.AiOutlineDoubleRight,
  chevronDown: MaterialDesign.MdOutlineExpandMore,
  columnWidth: AntDesignIcons.AiOutlineColumnWidth,
  columnHeight: AntDesignIcons.AiOutlineColumnHeight,
  download: MaterialDesign.MdDownload,
  play: MaterialDesign.MdPlayCircleOutline,
  close: MaterialDesign.MdOutlineClose,
  plus: MaterialDesign.MdAdd,
  plusCircle: Feather.FiPlusCircle,
  minus: MaterialDesign.MdOutlineRemove,
  minusCircle: Feather.FiMinusCircle,
  google: FcAbout.FcGoogle,
  facebook: FontAwesome.FaFacebook,
  twitter: FontAwesome.FaTwitter,
  instagram: FontAwesome.FaInstagram,
  restart: MaterialDesign.MdRestartAlt,
  youtube: FontAwesome.FaYoutube,
  arrowUp: FontAwesome.FaArrowUp,
  whatsApp: FontAwesome.FaWhatsapp,
  alert: IonIcons4.IoMdAlert,
  menu: IonIcons4.IoIosMenu,
  sendFile: IonIcons4.IoMdShareAlt,
  qrCodeBorder: MaterialDesign.MdQrCodeScanner,
  clip: BootstrapIcons.BsPaperclip,
  share: RemixIcon.RiShareFill,
  edit: FontAwesome.FaEdit,
  eyes: AntDesignIcons.AiOutlineEye,
  eyesSlash: BootstrapIcons.BsEyeSlash,
  user: FontAwesome.FaRegUser,
  userFill: RemixIcon.RiUser3Fill,
  qrcode: MaterialDesign.MdQrCode2,
  logout: MaterialDesign.MdLogout,
  calendar: BoxIcons.BiCalendarEvent,
  camera: AntDesignIcons.AiOutlineCamera,
  search: IonIcons4.IoMdSearch,
  timer: MaterialDesign.MdOutlineTimer,
  trash: FontAwesome.FaRegTrashAlt,
  palette: BootstrapIcons.BsPaletteFill,
  clipboardCheck: FontAwesome.FaClipboardCheck,
  checklistRtl: MaterialDesign.MdOutlineChecklistRtl,
  bookContent: BoxIcons.BiBookContent,
  colors: MaterialDesign.MdOutlineColorLens,
  content: BoxIcons.BiBookContent,
  pencilRuler: FontAwesome.FaPencilRuler,
  copy: MaterialDesign.MdContentCopy,
  file: MaterialDesign.MdOutlineInsertDriveFile,
  pdf: MaterialDesign.MdOutlinePictureAsPdf,
  image: MaterialDesign.MdOutlineImage,
  video: MaterialDesign.MdOutlineOndemandVideo,
  tools: RemixIcon.RiToolsFill,
  outlinePalette: MaterialDesign.MdOutlinePalette,
  compress: FontAwesome.FaCompressArrowsAlt,
  lockey: MaterialDesign.MdLock,
  shared: MaterialDesign.MdShare,
  link: MaterialDesign.MdLink,
  update: MaterialDesign.MdUpdate,
  metrics: FontAwesome.FaRegChartBar,
  ...MaterialDesign,
};

export type IconNameProps = keyof typeof icons;

export type IconComponentProps = {
  name: IconNameProps;
  className?: string;
  size?: number;
  color?: string;
};

export default function IconComponent({
  name,
  size = 32,
  ...props
}: IconComponentProps) {
  const IconFromName = icons[name ? name : 'image'];
  return <IconFromName {...props} style={{ width: size, height: 'auto' }} />;
}
