import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paginator = () => {
  return (
    <Pagination className=" my-10 text-xl">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="/signup"
            className=" bg-customRed-900 text-white"
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className=" bg-grayscale-500 text-grayscale-700 font-semibold">
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className=" bg-customRed-900 text-white font-semibold"
            isActive>
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className=" bg-grayscale-500 text-grayscale-700 font-semibold">
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis className=" text-customRed-900" />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="/products/test"
            className=" bg-customRed-900 text-white"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginator;
