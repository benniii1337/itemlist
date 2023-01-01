  function initVirtualSelect(options) {
    VirtualSelect.init({
      options: getOptions(),
      zIndex: 99,
      dropboxWrapper: 'body',
      ...options,
    });
  }

  initVirtualSelect({
    ele: '#select_apparel',
    search: true,
    placeholder: 'Apparel',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
  });

  initVirtualSelect({
    ele: '#select_material',
    search: true,
    placeholder: 'Material',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
  });
  
  initVirtualSelect({
    ele: '#select_quality',
    search: true,
    placeholder: 'Quality',
    options: [
      { label: 'Options 1', value: '1' },
      { label: 'Options 2', value: '2' },
      { label: 'Options 3', value: '3' },
    ],
  });
