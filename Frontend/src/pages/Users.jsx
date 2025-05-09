import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { FilterMatchMode } from "primereact/api";
import ActionsBtns from "../components/ActionsBtns";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";
const sampleRequests = [
  {
    id: 1,
    name: "Sara Ahmed",
    class: "BSCS 5th",
    session: "2021-2025",
    university: "BZU",
    rollNo: "BZU-2021-012",
    cgpa: 3.9,
    status: "approved",
    bookmark: true,
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
    bookmark: false,
  },
];
// getalluserdetail
export default function Users() {
  const [approvedRequests, setApprovedRequests] = useState([]);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getalluserdetail"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getallapproveduserdetail"
        );
        console.log(response.data.data);
        setApprovedRequests(response.data.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  const approvedMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          "http://localhost:5000/api/user/updateshowstatus",
          data,
          config
        );
        if (response.data.success === false) {
          notify("error", response.data.message);
        } else {
          refetch();
          notify("success", response.data.message);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        notify("error", error.response.data.message || error.message);
      }
    },
  });


  const toggleBookmark = (id, isShown) => {
    console.log(id);
    approvedMutation.mutate({ id: id, isshown: isShown });
  };

  const bookmarkTemplate = (rowData) => {
    return (
      <ActionsBtns
        rowData={rowData}
        onBookmark={() => {
          toggleBookmark(rowData._id, !rowData.isshown);
        }}
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
        rowClassName={(rowData) => (rowData.isshown ? "bookmarked" : "")}
        loading={isLoading}
      >
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
        />
        <Column field="email" header="Email" />
        <Column
          field="department"
          header="Department"
          filter
          filterPlaceholder="Search by class"
        />
        <Column field="session" header="Session" />
        <Column field="university" header="University" />
        <Column field="rollno" header="Roll No" />
        <Column field="cgpa" header="CGPA" />
        <Column field="status" header="Status" body={statusBodyTemplate} />
        <Column
          header="Bookmark"
          body={bookmarkTemplate}
          style={{ textAlign: "center", width: "8rem" }}
        />
      </DataTable>
    </div>
  );
}
