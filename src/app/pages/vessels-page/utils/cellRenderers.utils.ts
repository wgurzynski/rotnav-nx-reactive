import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';

export class BooleanRenderer implements ICellRenderer {
  private eGui!: HTMLElement;

  init({ value }: ICellRendererParams) {
    this.eGui = document.createElement('span');
    if (value !== '' || value !== undefined) {
      this.eGui.innerHTML = `<i style="color: ${
        value ? 'green' : 'red'
      }" width="20px" class="pi ${value ? 'pi-check' : 'pi-times'} " />`;
    }
  }

  getGui() {
    return this.eGui;
  }

  refresh() {
    return false;
  }
}

export function dateFormatter(params: any) {
  return new Date(params.value).toLocaleDateString('en-GB', {
    timeZone: 'UTC',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
