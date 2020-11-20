import { Options as MaterialTableOptions } from 'material-table'

interface MaterialTableVariables {
  length?: number
}

const PAGE_SIZE = 25

export function tableConfig<T extends Record<string, unknown>>(
  options: MaterialTableOptions<T> = {},
  variables: MaterialTableVariables = {},
): MaterialTableOptions<T> {
  const length = Math.max(variables.length || 0, 0)
  const pageSize = options.pageSize ?? PAGE_SIZE

  return {
    draggable: false,
    emptyRowsWhenPaging: false,
    filtering: false,
    grouping: false,
    loadingType: 'linear',
    paging: length > pageSize,
    pageSize,
    pageSizeOptions: [pageSize],
    search: false,
    showTitle: false,
    sorting: length > 1,
    toolbar: false,
    ...options,
  }
}
