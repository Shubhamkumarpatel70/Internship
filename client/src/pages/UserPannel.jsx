import React from 'react';
import { Sidebar } from "flowbite-react";
import { BiBuoy, BiHelpCircle, BiCrown } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiUser, HiViewBoards, HiBadgeCheck, HiLogout } from "react-icons/hi";
import { BiCog } from "react-icons/bi";
import { MdDescription } from "react-icons/md";

export default function UserPanel() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Projects
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiBadgeCheck}>
              Certificate
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={MdDescription}>
              Offer Letter
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BiCrown}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiCog}>
            Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiHelpCircle}>
            Help
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiLogout}>
            Logout
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
