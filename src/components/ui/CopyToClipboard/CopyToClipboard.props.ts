export interface ICopyToClipboard {
  readonly children: string;
  customStyles: { readonly [key: string]: string };
  isCopy: boolean;
  readonly placeholder: string;
  onDoubleClickHandler: () => void;
  isDisabled?: boolean;
}
