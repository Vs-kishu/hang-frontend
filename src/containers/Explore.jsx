import { useSelector, useDispatch } from "react-redux";
import {
  Post,
  SkeletonLoader,
  NoPostsFound,
  SearchAndSuggestion,
} from "components";
import { getExploreFeedPosts, setSortingOrder } from "slices";
import { useDocumentTitle } from "utils";
import { TopTitleBar } from "components";
export function Explore() {
  useDocumentTitle("Explore | Hang");
  const dispatch = useDispatch();
  const {
    status: { type, value },
    sortBy,
  } = useSelector((state) => state.posts);
  const exploreFeedPosts = useSelector(getExploreFeedPosts);
  const sortPosts = (e) => {
    dispatch(setSortingOrder(e.target.value));
  };

  const isPageLoading = type === "getAllPosts" && value === "pending";
  return (
    <section className="rounded-2xl bg-light-200 p-2 dark:bg-dark-200">
      <TopTitleBar title="Explore" />
      {isPageLoading ? (
        <div className="mt-4 flex flex-col gap-2">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      ) : exploreFeedPosts.length <= 0 ? (
        <div className="mt-16">
          <NoPostsFound />
        </div>
      ) : (
        <div className="">
          <div className="md:hidden">
            <h3 className="p-4 text-lg font-medium">Find Friends</h3>
            <SearchAndSuggestion />
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center justify-between p-4">
              <h3 className="text-lg font-medium">All Posts</h3>
              <div>
                <span className="mr-2">Sort by</span>
                <button
                  className={`rounded-l-2xl py-1 px-2 text-sm ${
                    sortBy === "TRENDING"
                      ? "bg-primary text-gray-600"
                      : "bg-light-100 text-gray-600 dark:bg-dark-100 dark:text-gray-200"
                  }`}
                  value="TRENDING"
                  onClick={sortPosts}
                >
                  Trending
                </button>
                <button
                  className={`rounded-r-2xl py-1 px-2 text-sm ${
                    sortBy === "DATE"
                      ? "bg-primary text-dark-200"
                      : "bg-dark-100 text-gray-200"
                  }`}
                  value="DATE"
                  onClick={sortPosts}
                >
                  Date
                </button>
              </div>
            </div>

            {exploreFeedPosts.map((post) => (
              <Post key={post._id} {...post} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
