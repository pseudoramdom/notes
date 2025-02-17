import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div className="title-container">
      <a href={baseDir} className="title-inner">
        <img 
          src="pseudoramdom.jpeg" 
          alt="Profile"
          className="profile-image" 
        />
      </a>
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
  
.title-inner {
  display: flex;
  flex-direction: row; /* Explicitly set for mobile */
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}

.profile-image {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

/* Desktop styles */
@media (min-width: 768px) {
  .title-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-image {
    width: 96px;
    height: 96px;
    margin-bottom: 1rem;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
