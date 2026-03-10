export interface AcTableColumn {
  key: string;
  label: string;
}

export interface AcTableConfig {
  columns: AcTableColumn[];
  data: Array<Record<string, unknown>>;
}
