module.exports = {
  title: 'Style guide example',
  sections: [
   {
     name: 'Views',
     components: 'src/views/**/[A-Z]*.js'
   },
   {
     name: 'Components',
     components: 'src/components/**/[A-Z]*.js'
   },
   {
     name: 'Server',
     components: 'src/[A-Z]*.js'
   }
 ],
  ignore: [
    '**/_*.js',
  ],
  styleguideDir: 'app/style'
};
