const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2025 简约设计。用心创造美好体验。
        </p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            关于我们
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            联系方式
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            隐私政策
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
