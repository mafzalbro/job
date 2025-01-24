import { AiOutlineFileAdd } from "react-icons/ai";
import { MdOutlineLastPage, MdOutlinePreview, MdOutlineSortByAlpha, MdOutlineScreenLockPortrait, MdOutlineFirstPage, MdOutlineSms } from "react-icons/md";
import { HiOutlineFilter, HiOutlineMail } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscOpenPreview, VscSymbolColor } from "react-icons/vsc";
import { IoCalendarOutline, IoDocumentOutline } from "react-icons/io5";
import { GrDocumentConfig, GrDocumentTransfer } from "react-icons/gr";
import { TbTransactionDollar } from "react-icons/tb";
import { GoPerson, GoSearch } from "react-icons/go";
import { FiHelpCircle, FiLayout } from "react-icons/fi";
import { LiaFaxSolid } from "react-icons/lia";
import { BsFileExcel, BsFilePdf, BsFileWord, BsPrinter } from "react-icons/bs";

const tools = [
    { icon: <MdOutlinePreview size={20} />, tooltip: 'Preview' },
    { icon: <FiLayout size={20} />, tooltip: 'Layout Designer' },
    { icon: <BsPrinter size={20} />, tooltip: 'Print' },
    { icon: <HiOutlineMail size={20} />, tooltip: 'Email' },
    { icon: <MdOutlineSms size={20} />, tooltip: 'SMS' },
    { icon: <LiaFaxSolid size={20} />, tooltip: 'Fax' },
    { icon: <MdOutlineScreenLockPortrait size={20} />, tooltip: 'Screen Lock' },
    { icon: <AiOutlineFileAdd size={20} />, tooltip: 'Add File' },
    { icon: <BsFilePdf size={20} />, tooltip: 'PDF' },
    { icon: <BsFileWord size={20} />, tooltip: 'Word' },
    { icon: <BsFileExcel size={20} />, tooltip: 'Excel' },

    { icon: <MdOutlineFirstPage size={20} />, tooltip: 'First Data Record' },
    { icon: <IoIosArrowBack size={20} />, tooltip: 'Previous Record' },
    { icon: <IoIosArrowForward size={20} />, tooltip: 'Next Record' },
    { icon: <MdOutlineLastPage size={20} />, tooltip: 'Last Data Record' },
    { icon: <HiOutlineFilter size={20} />, tooltip: 'Filter' },
    { icon: <VscOpenPreview size={20} />, tooltip: 'Journal Entry Preview' },
    { icon: <MdOutlineSortByAlpha size={20} />, tooltip: 'Sort' },
    { icon: <GrDocumentTransfer size={20} />, tooltip: 'Transfer Documents' },
    { icon: <IoDocumentOutline size={20} />, tooltip: 'Document' },
    { icon: <TbTransactionDollar size={20} />, tooltip: 'Transaction' },
    { icon: <GrDocumentConfig size={20} />, tooltip: 'Configure Document' },
    { icon: <IoCalendarOutline size={20} />, tooltip: 'Calendar' },
    { icon: <GoPerson size={20} />, tooltip: 'Person' },
    { icon: <FiHelpCircle size={20} />, tooltip: 'Help' },
    { icon: <GoSearch size={20} />, tooltip: 'Find' },
    { icon: <VscSymbolColor size={20} />, tooltip: 'Theme' }
];

export default tools;