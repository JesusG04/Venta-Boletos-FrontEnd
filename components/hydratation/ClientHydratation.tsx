'use client';

import { useEffect, useState } from 'react';

export default function ClientHydration({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Limpiar atributos de extensiones
    document.body.removeAttribute('cz-shortcut-listen');
    document.body.removeAttribute('fdprocessedid');
    
    // Opcional: Deshabilitar autocompletado en todos los inputs
    document.querySelectorAll('input').forEach(input => {
      input.setAttribute('autocomplete', 'off');
    });
  }, []);

  if (!isMounted) {
    return null; // O un loader/skeleton mientras se hidrata
  }

  return <>{children}</>;
}