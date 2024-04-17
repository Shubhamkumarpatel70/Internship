import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiTable, HiUser, HiViewBoards, HiCog, HiClipboardCheck, HiLogout, HiBadgeCheck, HiDocumentText, HiGlobe, HiMail, HiCheck, HiCheckCircle } from "react-icons/hi";

export default function AdminPanel() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/notification" icon={HiInbox}>
            Send Notification
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiClipboardCheck}>
            User Tasks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiGlobe}>
            Internship Domain
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCheckCircle}>
            Applied Internship
          </Sidebar.Item>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiBadgeCheck}>
              Generate Certificate
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiDocumentText}>
              Generate Offer Letter
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiMail}>
              Contact Us Response
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiCog}>
              Settings
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiLogout}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
