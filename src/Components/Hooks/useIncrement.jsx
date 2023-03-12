import { useState } from 'react';

export default function useIncrement(defaultValue = null) {
  const [state, setState] = useState(defaultValue);

  return [state, setState];
}
