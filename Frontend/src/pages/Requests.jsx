import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import ActionsBtns from "../components/ActionsBtns";

const sampleRequests = [
  {
    id: 1,
    name: "Ali Khan",
    class: "BSIT 7th",
    session: "2020-2024",
    university: "BZU",
    rollNo: "BZU-2020-001",
    cgpa: 3.6,
    status: "pending",
  },
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

export default function StudentRequests() {
  const [requests, setRequests] = useState([]);
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    class: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    setRequests(sampleRequests);
  }, []);

  const getSeverity = (status) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "danger";
      default:
        return "warning";
    }
  };

  const updateStatus = (id, newStatus) => {
    const updated = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updated);
  };

  const actionBodyTemplate = (rowData) => (
    <div className="flex gap-2">
      <ActionsBtns
        rowData={rowData}
        onAccept={() => updateStatus(rowData.id, "approved")}
        onReject={() => updateStatus(rowData.id, "rejected")}
      />
    </div>
  );

  const renderHeader = () => (
    <div className="flex justify-content-between align-items-center">
      <h5 className="m-0">Student Verification Requests</h5>
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

  const statusBodyTemplate = (rowData) => (
    <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
  );

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={requests}
        paginator
        rows={10}
        dataKey="id"
        filters={filters}
        filterDisplay="row"
        globalFilterFields={["name", "class", "university", "rollNo"]}
        header={header}
        emptyMessage="No requests found."
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
        />
        <Column
          field="class"
          header="Class"
          filter
          filterPlaceholder="Search by class"
        />
        <Column field="session" header="Session" />
        <Column field="university" header="University" />
        <Column field="rollNo" header="Roll No" />
        <Column field="cgpa" header="CGPA" />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          filter
          filterElement={(options) => (
            <Dropdown
              value={options.value}
              options={["pending", "approved", "rejected"]}
              onChange={(e) => options.filterApplyCallback(e.value)}
              placeholder="Select Status"
              className="p-column-filter"
              showClear
            />
          )}
        />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>
    </div>
  );
}
