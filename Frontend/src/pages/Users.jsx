import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { FilterMatchMode } from "primereact/api";
import ActionsBtns from "../components/ActionsBtns";

const sampleRequests = [

  {
    id: 2,
    name: "Sara Ahmed",
    class: "BSCS 5th",
    session: "2021-2025",
    university: "BZU",
    rollNo: "BZU-2021-012",
    cgpa: 3.9,
    status: "approved",
  },
];

export default function Users() {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    setApprovedRequests(sampleRequests);
  }, []);

  const toggleBookmark = (id) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  const bookmarkTemplate = (rowData) => {
    const isBookmarked = bookmarkedIds.includes(rowData.id);
    return (
      // <Button
      //   icon={isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      //   className="p-button-rounded p-button-text"
      //   onClick={() => toggleBookmark(rowData.id)}
      //   tooltip={isBookmarked ? "Remove Bookmark" : "Bookmark"}
      // />
       <ActionsBtns
        rowData={rowData}
        onBookmark={() => console.log("helo")}
        // onReject={() => updateStatus(rowData.id, "rejected")}
      />
    );
  };

  const statusBodyTemplate = (rowData) => (
    <Tag value={rowData.status} severity="success" />
  );

  const renderHeader = () => (
    <div className="flex justify-content-between align-items-center">
      <h5 className="m-0">Approved Students</h5>
      <InputText
        value={globalFilterValue}
        onChange={(e) => {
          const value = e.target.value;
          let _filters = { ...filters };
          _filters["global"].value = value;
          setFilters(_filters);
          setGlobalFilterValue(value);
        }}
        placeholder="Search..."
      />
    </div>
  );

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={approvedRequests}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name", "class", "university", "rollNo"]}
        filterDisplay="menu"
        header={header}
        emptyMessage="No approved students found."
      >
        <Column field="name" header="Name" />
        <Column field="class" header="Class" />
        <Column field="session" header="Session" />
        <Column field="university" header="University" />
        <Column field="rollNo" header="Roll No" />
        <Column field="cgpa" header="CGPA" />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
        />
        <Column
          header="Bookmark"
          body={bookmarkTemplate}
          style={{ textAlign: "center", width: "8rem" }}
        />
      </DataTable>
    </div>
  );
}
