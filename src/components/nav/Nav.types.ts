interface Button {
  name: string;
  onPress: () => any;
}

export interface NavProps {
  buttons: Button[];
}
