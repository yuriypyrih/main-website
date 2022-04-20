import { getRequest } from "../index";

export const getBlogsRequest = (params: { tab: string; search: string }) => {
  const ACCESS_TOKEN = process.env["REACT_APP_ACCESS_TOKEN"];
  return getRequest("/entries", {
    access_token: ACCESS_TOKEN,
    content_type: "post",
    include: 10,
    limit: 6,
    order: "-fields.blogDate",
    "fields.title[match]": params.search === "" ? undefined : params.search,
    "metadata.tags.sys.id[in]": params.tab === "all" ? undefined : params.tab,
  });
};

export const getSingleBlogRequest = (params: { id: string }) => {
  const ACCESS_TOKEN = process.env["REACT_APP_ACCESS_TOKEN"];
  return getRequest(`/entries`, {
    access_token: ACCESS_TOKEN,
    content_type: "post",
    include: 10,
    limit: 1,
    "sys.id": params.id,
  });
};
