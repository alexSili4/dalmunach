const preventArrowKeys = (e: KeyboardEvent) => {
  const targetKeys = [
    'ArrowUp',
    'ArrowDown',
    'PageUp',
    'PageDown',
    'Home',
    'End',
    'Space',
  ];
  const isTargetKey = targetKeys.includes(e.key);

  if (isTargetKey) {
    e.preventDefault();
  }
};

export default preventArrowKeys;
