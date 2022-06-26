import "./Sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
            <div className="top">
          <span className="logo">TeraGrand</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Главное</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Админ панель</span>
          </li>
          <p className="title">Пользователи</p>
          <Link to="/dasboard/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Номера</span>
            </li>
          </Link>
          <Link to="/dasboard/post" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Посты</span>
            </li>
          </Link>
          <Link to="/dasboard/comment">
          <li>
            <CreditCardIcon className="icon" />
            <span>Отзовы</span>
          </li>
          </Link>
          <Link to="/dasboard/new">
          <li>
            <LocalShippingIcon className="icon" />
            <span>Новости</span>
          </li>
          </Link>
          <p className="title">Обслуживание</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Онлайн</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Уведомления</span>
          </li>
          <p className="title">Система</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Регистрация</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Настройки</span>
          </li>
          <p className="title">Информация</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>О себе</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <Link to="/">
            <span>Выход</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        ></div>
        <div
          className="colorOption"
        ></div>
      </div>
    </div>
  );
};