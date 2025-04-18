import { Tab, Tabs, Box } from "@mui/material";
import HomeCard from "./HomeCardProducts";

export default function HomeProduct() {
  // const apifunction = () =>{

  // }
  return (
    <>
      <div className=" hidden sm:flex flex-wrap mt-12 flex-col items-start  px-40 py-14 h-[1632px]  md:h-[1056px] ">
        <div className="md:flex hidden">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs aria-label="basic tabs example">
              <Tab label="New Arraival" />
              <Tab label="Best Seller" />
              <Tab label="Featured Products" />
            </Tabs>
          </Box>
        </div>
        <div className="flex flex-wrap gap-5 w-full h-[1632px] md:h-[880px] pt-6">
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
          <HomeCard img="" name="" price="" />
        </div>
      </div>
      <div className=" sm:hidden flex-col gap-y-4 flex w-full h-[1632px] px-4 py-14">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs aria-label="basic tabs example">
            <Tab label="New Arraival" />
            <Tab label="Best Seller" />
            <Tab label="Featured Products" />
          </Tabs>
        </Box>
        <div>
          <div className="flex mb-4 gap-x-6 justify-center">
            <HomeCard img="" name="" price=""/>
            <HomeCard img="" name="" price=""/>
          </div>
          <div className="flex mb-4 gap-x-6 justify-center">
            <HomeCard img="" name="" price=""/>
            <HomeCard img="" name="" price=""/>
          </div>
          <div className="flex mb-4 gap-x-6 justify-center">
            <HomeCard img="" name="" price=""/>
            <HomeCard img="" name="" price=""/>
          </div>
          <div className="flex gap-x-6 justify-center">
            <HomeCard img="" name="" price=""/>
            <HomeCard img="" name="" price=""/>
          </div>
        </div>
      </div>
    </>
  );
}
