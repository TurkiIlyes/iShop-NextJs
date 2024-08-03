"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumb = () => {
  const paths = usePathname().split("/").slice(1);

  return (
    <div className=" flex flex-col gap-3">
      <h1 className=" capitalize text-3xl font-medium text-grayscale-800">
        {paths[paths.length - 1].split("-").join(" ")}
      </h1>
      <Breadcrumb>
        <BreadcrumbList className=" capitalize text-xs font-medium text-grayscale-900 ">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">home</BreadcrumbLink>
          </BreadcrumbItem>
          {paths.map((e, i) => {
            return (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem key={i}>
                  <Link href={`/${paths.slice(0, i + 1).join("/")}`}>
                    {e.split("-").join(" ")}
                  </Link>
                </BreadcrumbItem>
              </>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
