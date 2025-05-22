import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import ActionsBtns from "../components/ActionsBtns";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";
  
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
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const { data, isLoading,refetch } = useQuery({
    queryKey: ["getalluserdetail"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/getalluserdetail"
        );
        console.log(response.data.data);
        setRequests(response.data.data);
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
          "http://localhost:5000/api/user/updateapprovalstatus",
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
  const deleteMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.post(
          "http://localhost:5000/api/user/deleteuserdetail",
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
  useEffect(() => {
    console.log(requests);
  }, [requests]);

  const getSeverity = (status) => {
    switch (status) {
      case "approved":
        return "success";
      case "rejected":
        return "danger";
      case "pending":
        return "info";
      default:
        return "warning";
    }
  };


  const updateStatus = (id, status) => {
    approvedMutation.mutate({ id: id, isapproved: status });
  };
  const DeleteStatus = (id, status) => {
    deleteMutation.mutate({ id: id });
  };

  const actionBodyTemplate = (rowData) => (
    <div className="flex gap-2">
      <ActionsBtns
        rowData={rowData}
        onAccept={() => updateStatus(rowData._id, "approved")}
        onReject={() => updateStatus(rowData._id, "rejected")}
        onDelete={() => DeleteStatus(rowData._id)}
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
        globalFilterFields={["name", "session","department", "university", "rollno"]}
        header={header}
        emptyMessage="No requests found."
        loading={isLoading}
      >
        <Column
          header="Img"
          body={(rowData) => (
            <img
              src={`http://localhost:5000/${rowData.img}`}
              alt={rowData.name}
              className="user-image"
              width={50}
              height={50}
            />
          )}
        />
        <Column
          field="name"
          header="Name"
          filter
          filterPlaceholder="Search by name"
        />
        <Column
          field="fatherName"
          header="Father Name"
        />
        <Column field="cnic" header="CNIC"  />
        <Column field="DOB" header="DOB" />
        <Column field="rollno" header="Roll No" />
        <Column field="passingYear" header="Passing Year" />
        <Column field="gender" header="Gender" />
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
