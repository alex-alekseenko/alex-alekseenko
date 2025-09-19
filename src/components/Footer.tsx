export default function Footer() {
  return (
    <footer className="bg-background-light-gray border-t border-neutral-medium-gray">
      <div className="container-max py-8">
        <div className="text-center">
          <p className="text-sm text-primary-text">
            © {new Date().getFullYear()} Alex Alekseenko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}