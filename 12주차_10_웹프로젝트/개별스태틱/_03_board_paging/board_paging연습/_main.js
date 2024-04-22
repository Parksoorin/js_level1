import { BoardDAO } from "./_boardDAO.js";
import { ControllerMain } from "./_controllerMain.js";
import { MemberDAO } from "./_memberDAO.js";

ControllerMain.start();
MemberDAO.start();
BoardDAO.start();