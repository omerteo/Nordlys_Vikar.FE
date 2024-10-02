import React from "react";

export default function Layout({ children, addDoctor }: { children: React.ReactNode, addDoctor: React.ReactNode }) {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="w-1/3 bg-base-200 text-base-content p-4 h-full @container">
        {addDoctor}
        </div>
      </div>
    </div>
  )
}
