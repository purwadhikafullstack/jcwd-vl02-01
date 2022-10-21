import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BsCalendarDate } from "react-icons/bs";
import { HiOutlineChevronDown } from "react-icons/hi";
import { API_URL } from "../helper";
import Axios from "axios";

export default function AdminReportTransaction() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const yLabels = {
    150000: `Rp150.000,-`,
    200000: "Rp200.000,-",
    1000000: "Rp1.000.000,-",
    500000: "Rp500.000,-",
    250000: "Rp250.000,-",
    50000: "Rp50.000,-",
  };
  const data = {
    labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    datasets: [
      {
        label: "Sales",
        data: [150000, 200000, 1000000, 500000, 250000, 50000, 150000],
        borderColor: "rgb(255,99,132)",
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };
  const [filters, setFilters] = React.useState({
    date_from: "",
    date_to: "",
    sort: "",
    order: "",
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dateFrom, setDateFrom] = React.useState("");
  const [dateTo, setDateTo] = React.useState("");
  const [dataChart, setDataChart] = React.useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnClosePopover = async () => {};
  const resetFilter = async () => {};
  const getData = async () => {
    try {
      let getRes = await Axios.get(API_URL + "/admin/get_transaction_report");
      setDataChart((prev) => (prev = getRes.data));
      console.log(getRes);
      console.log(dataChart);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-bgWhite min-h-screen py-5 px-5 lg:px-[10vw]">
      <div className="container mx-auto mt-[2.5vh]">
        <h1 className="font-bold text-lg text-hijauBtn text-center">
          SEHATBOS.COM <span className="font-normal">| SALES REPORT</span>
        </h1>
      </div>

      <div className="container mx-auto mt-[5vh] grid justify-items-start">
        <h1 className="font-bold text-lg">Sales Report</h1>
        <Breadcrumb fontSize="xs" className="text-[rgb(49,53,65,0.75)]">
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/report">Report</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/report/sales">
              Sales Report
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink>Transaction Report</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {/* Chart */}
      <div className="mt-3">
        <Line
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Total Sales (in Rp)",
                },
                ticks: {
                  callback: function (value, index, values) {
                    return yLabels[value];
                  },
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Date",
                },
              },
            },
            title: {
              display: true,
              text: "Transaction Report",
            },
          }}
          data={data}
          height={"80%"}
          redraw={true}
        />
      </div>
      <div className="container mx-auto lg:mt-3 text-[rgb(49,53,65,0.75)] lg:grid justify-items-end ">
        <div className="space-x-3">
          <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <PopoverTrigger>
              <Button
                rightIcon={<BsCalendarDate />}
                style={{ borderColor: "gray" }}
                borderRadius={"0"}
                color="gray"
                variant="outline"
                size={"sm"}
              >
                {filters.date_from && filters.date_to
                  ? filters.date_from + " - " + filters.date_to
                  : "Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader fontWeight="bold">Filter by date</PopoverHeader>
              <PopoverBody className="flex flex-col items-center space-y-2 mx-5">
                <Input
                  type="date"
                  onChange={(e) => {
                    setDateFrom((prev) => (prev = e.target.value));
                  }}
                />
                <h1 className="">to</h1>
                <Input
                  type="date"
                  onChange={(e) => {
                    setDateTo((prev) => (prev = e.target.value));
                  }}
                />
              </PopoverBody>
              <PopoverFooter border="0" pb={4}>
                <div className="flex justify-end space-x-5">
                  <Button colorScheme="blue" onClick={btnClosePopover}>
                    Close
                  </Button>
                </div>
              </PopoverFooter>
            </PopoverContent>
          </Popover>
          <Menu>
            <MenuButton
              className="text-gray"
              style={{ borderRadius: 0, border: "1px solid gray" }}
              as={Button}
              rightIcon={<HiOutlineChevronDown />}
              size={"sm"}
            >
              {filters.sort === ""
                ? "Sort"
                : `${filters.sort} (${filters.order})`}
            </MenuButton>
            <MenuList>
              <MenuItem
                className="text-xs"
                onClick={() => {
                  setCurrentPage((prev) => (prev = 1));
                  setFilters((prev) => ({ ...prev, sort: "", order: "" }));
                }}
              >
                None
              </MenuItem>
              <MenuItem
                className="text-xs"
                onClick={() => {
                  setCurrentPage((prev) => (prev = 1));
                  setFilters((prev) => ({
                    ...prev,
                    sort: "date",
                    order: "asc",
                  }));
                }}
              >
                {"Date (Ascending)"}
              </MenuItem>
              <MenuItem
                className="text-xs"
                onClick={() => {
                  setCurrentPage((prev) => (prev = 1));
                  setFilters((prev) => ({
                    ...prev,
                    sort: "date",
                    order: "desc",
                  }));
                }}
              >
                {"Date (Descending)"}
              </MenuItem>
              <MenuItem
                className="text-xs"
                onClick={() => {
                  setCurrentPage((prev) => (prev = 1));
                  setFilters((prev) => ({
                    ...prev,
                    sort: "sales",
                    order: "asc",
                  }));
                }}
              >
                {"Total Sales (Ascending)"}
              </MenuItem>
              <MenuItem
                className="text-xs"
                onClick={() => {
                  setCurrentPage((prev) => (prev = 1));
                  setFilters((prev) => ({
                    ...prev,
                    sort: "sales",
                    order: "desc",
                  }));
                }}
              >
                {"Total Sales (Descending)"}
              </MenuItem>
            </MenuList>
          </Menu>
          <Button
            style={{ borderColor: "gray" }}
            disabled={
              !filters.product_name &&
              !filters.sort &&
              !filters.order &&
              !filters.date_from &&
              !filters.date_to
            }
            borderRadius={"0"}
            color="gray"
            variant="outline"
            size={"sm"}
            onClick={resetFilter}
          >
            Reset Filter
          </Button>
        </div>
      </div>
      {/* Table */}
      <div className="flex container mx-auto mt-[2.5vh] justify-center content-center">
        <Box
          w="100vw"
          borderWidth="1px"
          overflow="hidden"
          fontWeight="semibold"
          lineHeight="tight"
          className="py-[5px] border-borderHijau text-center bg-hijauBtn text-bgWhite"
        >
          <h1 className="inline">Sales Report</h1>
        </Box>
      </div>
      <div className="flex container mx-auto bg-[rgb(2,93,103,0.1)] mb-[2.5vh]">
        <TableContainer w="100vw" fontSize="xs">
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>No.</Th>
                <Th>Date</Th>
                <Th>Total Transaction</Th>
                <Th>Total Sales</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataChart.map((val, idx) => {
                return (
                  <Tr>
                    <Td>{idx + 1}</Td>
                    <Td>
                      {new Date(val.date).toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </Td>
                    <Td>{val.total_transaction}</Td>
                    <Td>Rp{val.total_sales.toLocaleString("id")},-</Td>
                  </Tr>
                );
              })}
              {/* map data */}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}