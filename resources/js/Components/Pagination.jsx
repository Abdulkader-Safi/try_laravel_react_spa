import { Link } from "@inertiajs/react";

export default function Pagination({ links, queryParams }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => {
        // Remove the `page` parameter from queryParams
        const filteredQueryParams = { ...queryParams };
        delete filteredQueryParams.page;

        // Merge the filtered query parameters with the link URL
        const url = link.url
          ? `${link.url}${
              Object.keys(filteredQueryParams).length > 0
                ? `&${new URLSearchParams(filteredQueryParams)}`
                : ""
            }`
          : "";

        return (
          <Link
            preserveScroll
            href={url}
            key={link.label}
            className={
              "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
              (link.active ? "bg-gray-950 " : " ") +
              (!link.url
                ? "!text-gray-500 cursor-not-allowed "
                : "hover:bg-gray-950")
            }
            dangerouslySetInnerHTML={{ __html: link.label }}
          ></Link>
        );
      })}
    </nav>
  );
}
