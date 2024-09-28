import Link from "next/link";

export type SidebarLinkProps = {
  href: string;
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
};

export const SidebarLink: React.FC<SidebarLinkProps> = (
  props: SidebarLinkProps
) => {
  return (
    <li className="px-5">
      <Link
        className={`flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700 ${
          props.active ? "bg-gray-100 dark:bg-neutral-700" : ""
        }`}
        href={props.href}
      >
        {props.icon}
        {props.label}
      </Link>
    </li>
  );
};
