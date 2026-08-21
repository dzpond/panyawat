const SITE_NAME = "ครูปัญญวัฒน์ ทิพย์อักษร";

const NAV_LINKS = [
  { href: "index.html", label: "เกี่ยวกับฉัน", page: "index" },
  { href: "resume.html", label: "ประวัติส่วนตัว", page: "resume" },
  { href: "pa.html", label: "รายงาน PA", page: "pa" },
  { href: "gallery.html", label: "ภาพกิจกรรม", page: "gallery" },
  { href: "documents.html", label: "เอกสาร", page: "documents" },
];

function renderHeader() {
  const currentPage = document.body.dataset.page;

  const navHtml = NAV_LINKS.map(link => {
    const activeClass = link.page === currentPage ? ' class="active"' : "";
    return `<a href="${link.href}"${activeClass}>${link.label}</a>`;
  }).join("\n      ");

  document.getElementById("site-header").innerHTML = `
  <div class="container header-inner">
    <a href="index.html" class="logo">${SITE_NAME}</a>
    <nav class="main-nav">
      ${navHtml}
    </nav>
  </div>`;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
  <div class="container">
    <p>&copy; 2026 Panyawat Thipuksorn. All rights reserved.</p>
  </div>`;
}

renderHeader();
renderFooter();
