import BookmarkCart from "@/components/bookmark-cart"
import Search from "@/components/common/search"
import Controls from "@/components/controls"
import EmptyResult from "@/components/empty-results"
import GridBase, {
  GridBody,
  GridFooter,
  GridHeader,
} from "@/components/layout/grid"
import Pagination from "@/components/pagination"
import SharedList from "@/components/shared-list-layout"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchParams } from "@/lib/definitions"
import { searchArt } from "@/server/api"

type Props = {
  searchParams: SearchParams
}

export default async function HomePage({ searchParams }: Props) {
  const { query, page, value, field } = searchParams
  const response = await searchArt(query, page, "25", field, value)
  const { pagination, data } = response
  return (
    <GridBase layout="plain" className="size-full">
      <GridHeader className="between border-b p-2">
        <div className="center gap-2">
          <Search queryString="query" placeholder="Search" />
          <BookmarkCart />
        </div>
        <div className="center gap-2">
          <Controls />
          <ThemeToggle />
        </div>
      </GridHeader>
      <GridBody className="rounded-none">
        {data.length ? <SharedList data={data} /> : <EmptyResult />}
      </GridBody>
      <GridFooter className="between border-t p-2">
        <Pagination pagination={pagination} />
      </GridFooter>
    </GridBase>
  )
}
