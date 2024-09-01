// ------------------------------------------------------------
// ブラケット類を全角にする
// ------------------------------------------------------------

function main() {
  if (document.Selection.Mode != meModeStream) {
    return;
  }

  if (document.Selection.IsEmpty) {
    document.selection.SelectLine();
  }
  const activeX = document.selection.GetActivePointX(mePosLogical);
  const activeY = document.selection.GetActivePointY(mePosLogical);
  const anchorX = document.selection.GetAnchorPointX(mePosLogical);
  const anchorY = document.selection.GetAnchorPointY(mePosLogical);
  document.Selection.Text = String(document.Selection.Text).replace(/[\(\)\[\]]/g, function(m) {
    if (m == "(") {return "（"}
    if (m == ")") {return "）"}
    if (m == "[") {return "［"}
    if (m == "]") {return "］"}
  });
  document.Selection.SetActivePoint(mePosLogical, anchorX, anchorY, false);
  document.Selection.SetActivePoint(mePosLogical, activeX, activeY, true);
}

main();
