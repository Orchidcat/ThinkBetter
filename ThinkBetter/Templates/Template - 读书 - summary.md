
<%*
//check if an editor is the active view
const editor = app.workspace.activeLeaf?.view?.editor;
if(!editor) return;

const separator = " ... ";

function getHighlight (i) {
  const line = editor.getLine(i); 
  const match = line.matchAll(/==(.*?)==/g);
  const heading = line.match(/^(#+)\s/);
  const sketch = line.match(/^(!\[\[.*?]])/);
  let result = null;
  while(!(highlight = match.next()).done) {
    result = result ? result + separator + highlight.value[1] : highlight.value[1];
  }
  if(result) return (heading ? heading[0]:"") + result;
  if(sketch) return sketch[0];
  return null;
}

let output = [];

const linecount = editor.lineCount();
for(i=0;i<linecount;i++) {
  const highlight = getHighlight(i);
  if(highlight) output.push(highlight);
}

window.navigator.clipboard.writeText(output.join("\n\n"));
new Notice("Extracted highlights are available on the clipboard.",4000);
%>

