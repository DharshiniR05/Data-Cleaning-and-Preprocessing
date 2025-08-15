:root{
  --bg:#0f1724;
  --card:#0b1220;
  --muted:#99a3b3;
  --accent:#7c5cff;
  --glass: rgba(255,255,255,0.03);
  --radius:12px;
  --gap:14px;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  background: linear-gradient(180deg,#071025 0%, #0b1828 100%);
  color:#e6eef8;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  padding:18px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:15px;
  line-height:1.4;
}

.container{
  width:100%;
  max-width:900px;
  border-radius:16px;
  padding:18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  box-shadow: 0 8px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
  display:grid;
  gap:16px;
}

header h1{margin:6px 0 0;font-size:20px}
.subtitle{margin:4px 0 10px;color:var(--muted);font-size:13px}

.editor label{display:block;margin-bottom:6px;font-weight:600}
textarea{
  width:100%;
  resize:vertical;
  min-height:120px;
  padding:12px;
  border-radius:10px;
  border:1px solid rgba(255,255,255,0.04);
  background:var(--glass);
  color:inherit;
  font-size:15px;
}

.controls{
  display:flex;
  gap:12px;
  align-items:center;
  justify-content:space-between;
  margin-top:10px;
}
.controls .left{display:flex;gap:10px;align-items:center}
select{
  padding:8px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.04);
  background:transparent;color:inherit;
}
.btn{
  padding:8px 12px;
  border-radius:10px;
  border:none;
  cursor:pointer;
  font-weight:600;
  background:transparent;color:inherit;
}
.btn.primary{background:linear-gradient(90deg,var(--accent),#4a6bff);box-shadow:0 6px 18px rgba(76,60,255,0.12);color:white}
.btn.ghost{opacity:0.7}

.results h2,.preview h2{margin:0 0 8px;font-size:15px}
.suggestions{
  min-height:80px;
  padding:12px;
  border-radius:10px;
  background:rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.03);
  color:var(--muted);
}
.suggestion-item{
  display:flex;
  gap:8px;
  align-items:center;
  padding:8px;
  border-radius:8px;
  margin-bottom:8px;
  background:linear-gradient(180deg,rgba(255,255,255,0.01),transparent);
}
.suggestion-item strong{min-width:110px}
.suggestion-item button{margin-left:auto;padding:6px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);cursor:pointer}

.preview-box{
  min-height:80px;
  padding:12px;border-radius:10px;
  background:rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.03);
  color:inherit;
  white-space:pre-wrap;
}

/* small screens */
@media (max-width:640px){
  .controls{flex-direction:column;align-items:stretch}
  .controls .right{display:flex;gap:8px;justify-content:space-between}
  header h1{font-size:18px}
  .suggestion-item strong{min-width:80px}
}