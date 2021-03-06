# Change Log

## [v0.3.5](https://github.com/ManifoldScholar/manifold/tree/v0.3.5) (1/26/2018)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.3.4...v0.3.5)

**Bugs**

- Do not force UTF8 epub source encoding during ingestion

## [v0.3.4](https://github.com/ManifoldScholar/manifold/tree/v0.3.4) (1/6/2018)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.3.3...v0.3.4)

**Features**

- Set Google service credentials from file

## [v0.3.3](https://github.com/ManifoldScholar/manifold/tree/v0.3.3) (12/28/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.3.2...v0.3.3)

**Bugs**

- Improve custom logo layout
- Align project figures to grid

## [v0.3.2](https://github.com/ManifoldScholar/manifold/tree/v0.3.2) (12/06/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.3.1...v0.3.2)

**Bugs**

- Update redis-rails to address CVE-2017-1000248
- Check revision before deploy
- Restore source maps to production build

## [v0.3.1](https://github.com/ManifoldScholar/manifold/tree/v0.3.1) (11/17/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.3.0...v0.3.1)

**Bugs**

- Update rubyzip dependency to address CVE-2017-5946 [\#664](https://github.com/ManifoldScholar/manifold/issues/664)
- Improve Open Graph tags in multiple containers
- Pass path rather than URL to router on SSR
- Adjust production log level

## [v0.3.0](https://github.com/ManifoldScholar/manifold/tree/v0.3.0) (10/13/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.2.0...v0.3.0)

**Features**

- Manifold supports SSL [\#631](https://github.com/ManifoldScholar/manifold/issues/631)
- Users can remove their highlights from a text [\#618](https://github.com/ManifoldScholar/manifold/issues/618)
- Admins can create simple content pages in Manifold [\#586](https://github.com/ManifoldScholar/manifold/issues/586)
- Admin can manage the home page hero and text. [\#574](https://github.com/ManifoldScholar/manifold/issues/574)
- Update reader header to match new comps [\#567](https://github.com/ManifoldScholar/manifold/issues/567)
- Update TOC design to match latest comps [\#566](https://github.com/ManifoldScholar/manifold/issues/566)
- Update hero layout with draft button, streamlined makers list [\#501](https://github.com/ManifoldScholar/manifold/issues/501)
- Improve copy and style of transaction account emails [\#474](https://github.com/ManifoldScholar/manifold/issues/474)
- Admins can name their Manifold installation [\#472](https://github.com/ManifoldScholar/manifold/issues/472)
- Manifold settings model has sensible default settings [\#471](https://github.com/ManifoldScholar/manifold/issues/471)
- Manifold supports the EPUB3 epub:type namespaced attribute [\#460](https://github.com/ManifoldScholar/manifold/issues/460)
- Preliminary work allowing a user to see all their annotations of a text [\#450](https://github.com/ManifoldScholar/manifold/issues/450)
- Admins can specify email delivery method and settings [\#440](https://github.com/ManifoldScholar/manifold/issues/440)
- Manifold can ingest an EPUB from a URL [\#420](https://github.com/ManifoldScholar/manifold/issues/420)
- Activity can be hidden on a project-by-project basis. [\#419](https://github.com/ManifoldScholar/manifold/issues/419)
- React is updated to version 15.5 [\#417](https://github.com/ManifoldScholar/manifold/issues/417)
- Backend users can create a new user [\#411](https://github.com/ManifoldScholar/manifold/issues/411)
- Zoom is enabled for image resources [\#407](https://github.com/ManifoldScholar/manifold/issues/407)
- Resource notations are usable on mobile devices [\#406](https://github.com/ManifoldScholar/manifold/issues/406)
- Admins can add resource collection annotations [\#405](https://github.com/ManifoldScholar/manifold/issues/405)
- Every annotation has a permalink [\#404](https://github.com/ManifoldScholar/manifold/issues/404)
- Webpack is upgraded to v3. Babel is upgraded. [\#402](https://github.com/ManifoldScholar/manifold/issues/402)
- Improve GDoc Ingestion Styles [\#388](https://github.com/ManifoldScholar/manifold/issues/388)
- Include draft/live toggle for projects. Only admins can see projects in draft mode. [\#371](https://github.com/ManifoldScholar/manifold/issues/371)
- Manifold has correct page titles, open graph tags; social metadata is more robust [\#345](https://github.com/ManifoldScholar/manifold/issues/345)

**Bugs**

- If no OAUTH providers are configured, don't show the external auth message on the login screen [\#633](https://github.com/ManifoldScholar/manifold/issues/633)
- Firefox shows router error \(on all pages?\) [\#630](https://github.com/ManifoldScholar/manifold/issues/630)
- Prevent letter spacing CSS in reader [\#623](https://github.com/ManifoldScholar/manifold/issues/623)
- Manifold can fail when cookie is missing. [\#621](https://github.com/ManifoldScholar/manifold/issues/621)
- Ingestion uploader is not responding to files [\#609](https://github.com/ManifoldScholar/manifold/issues/609)
- Only the SSR checks the cookie for an authenticated session. [\#605](https://github.com/ManifoldScholar/manifold/issues/605)
- Regression in backend lists [\#599](https://github.com/ManifoldScholar/manifold/issues/599)
- Reader text title and section title no longer appears in header [\#598](https://github.com/ManifoldScholar/manifold/issues/598)
- Tighten up spacing on mobile person overlay [\#595](https://github.com/ManifoldScholar/manifold/issues/595)
- Add spacing to the end of backend horizontal secondary menu [\#594](https://github.com/ManifoldScholar/manifold/issues/594)
- iOS style needs to be removed from login overlay [\#593](https://github.com/ManifoldScholar/manifold/issues/593)
- Update Texts button and table [\#592](https://github.com/ManifoldScholar/manifold/issues/592)
- Reduce person picker UI on mobile [\#591](https://github.com/ManifoldScholar/manifold/issues/591)
- Cover picker is a bit too crowded on iPhone 4/5 size [\#590](https://github.com/ManifoldScholar/manifold/issues/590)
- Update backend form styles to be slightly lighter on mobile [\#589](https://github.com/ManifoldScholar/manifold/issues/589)
- Padding issue on tablet sizes [\#585](https://github.com/ManifoldScholar/manifold/issues/585)
- Group notation titles are not formatted [\#577](https://github.com/ManifoldScholar/manifold/issues/577)
- Back link text wraps incorrectly on mobile [\#573](https://github.com/ManifoldScholar/manifold/issues/573)
- Reader nav text too large on mobile [\#570](https://github.com/ManifoldScholar/manifold/issues/570)
- Vertical alignment off on text count icons [\#564](https://github.com/ManifoldScholar/manifold/issues/564)
- rake development:load crashes [\#562](https://github.com/ManifoldScholar/manifold/issues/562)
- Add comment icon and header missing from resource detail comments [\#560](https://github.com/ManifoldScholar/manifold/issues/560)
- Add "purchase version label" to backend project form. [\#559](https://github.com/ManifoldScholar/manifold/issues/559)
- Resource collection notations are missing thumbnail if none is set. [\#558](https://github.com/ManifoldScholar/manifold/issues/558)
- Display error in backend select inputs [\#556](https://github.com/ManifoldScholar/manifold/issues/556)
- Backend header links should have a hover state [\#555](https://github.com/ManifoldScholar/manifold/issues/555)
- Null date values show as Dec 31, 1969 in the backend [\#554](https://github.com/ManifoldScholar/manifold/issues/554)
- Manifold Footer / Copyright Dates [\#553](https://github.com/ManifoldScholar/manifold/issues/553)
- UX for ingestion is confusing [\#551](https://github.com/ManifoldScholar/manifold/issues/551)
- Searching for projects before projects exist triggers error [\#547](https://github.com/ManifoldScholar/manifold/issues/547)
- Correct hard coded reply count in view. [\#546](https://github.com/ManifoldScholar/manifold/issues/546)
- Draft projects shouldn't show updated timestamp on frontend. [\#541](https://github.com/ManifoldScholar/manifold/issues/541)
- Warning with the file upload form component [\#540](https://github.com/ManifoldScholar/manifold/issues/540)
- Long title in resource list should be wrapped or cropped [\#539](https://github.com/ManifoldScholar/manifold/issues/539)
- Reader footer is stacked above overlays [\#533](https://github.com/ManifoldScholar/manifold/issues/533)
- Improve usability of backend projects list [\#531](https://github.com/ManifoldScholar/manifold/issues/531)
- Remove "chapter" from next and previous links in reader [\#530](https://github.com/ManifoldScholar/manifold/issues/530)
- Removing a maker's avatar in the backend does not work. [\#527](https://github.com/ManifoldScholar/manifold/issues/527)
- Correct category footer display issues in reader. [\#526](https://github.com/ManifoldScholar/manifold/issues/526)
- Ingestion does not correctly identify EPUB2 titles [\#523](https://github.com/ManifoldScholar/manifold/issues/523)
- Backend project list doesn't always show correct thumbnail [\#522](https://github.com/ManifoldScholar/manifold/issues/522)
- Malformed URIs in ingested texts breaks ingestion [\#519](https://github.com/ManifoldScholar/manifold/issues/519)
- If no results are found, backend project search breaks [\#518](https://github.com/ManifoldScholar/manifold/issues/518)
- Nav button redundancy on mobile layout [\#512](https://github.com/ManifoldScholar/manifold/issues/512)
- Error on user creation [\#509](https://github.com/ManifoldScholar/manifold/issues/509)
- Remove normal font-weight declarations from ingested texts [\#507](https://github.com/ManifoldScholar/manifold/issues/507)
- In production, Manifold sometimes erroneously returns an auth error message [\#504](https://github.com/ManifoldScholar/manifold/issues/504)
- Stylesheet create/edit views in backend do not show errors [\#502](https://github.com/ManifoldScholar/manifold/issues/502)
- The path to resources from project activity cards is incorrect. [\#498](https://github.com/ManifoldScholar/manifold/issues/498)
- When annotation drawer opens, the textarea should have focus. [\#495](https://github.com/ManifoldScholar/manifold/issues/495)
- Webpack config not extracting CSS in production build [\#492](https://github.com/ManifoldScholar/manifold/issues/492)
- Prevent padding on text section pagination when not showing [\#490](https://github.com/ManifoldScholar/manifold/issues/490)
- Remove placeholder features container from settings [\#488](https://github.com/ManifoldScholar/manifold/issues/488)
- New User form throws an error in production [\#487](https://github.com/ManifoldScholar/manifold/issues/487)
- Resource slideshow controls don't match comps for mobile [\#482](https://github.com/ManifoldScholar/manifold/issues/482)
- Hero BG gray on projects is incorrect [\#480](https://github.com/ManifoldScholar/manifold/issues/480)
- EPUB ingestion not recognizing start section in V2 and V3 due to path changes [\#479](https://github.com/ManifoldScholar/manifold/issues/479)
- Footer subject bar in reader isn't positioned correctly [\#478](https://github.com/ManifoldScholar/manifold/issues/478)
- Ingestion strategies are not detecting table of contents [\#477](https://github.com/ManifoldScholar/manifold/issues/477)
- Pressing return in any text field on the new user form in the backend reveals the password [\#476](https://github.com/ManifoldScholar/manifold/issues/476)
- Edit profile view is briefly flashed after login, which shouldn't happen [\#473](https://github.com/ManifoldScholar/manifold/issues/473)
- Start reading event link opens in new tab. It shouldn't. [\#468](https://github.com/ManifoldScholar/manifold/issues/468)
- Ingestor spec is failing [\#465](https://github.com/ManifoldScholar/manifold/issues/465)
- EPUB ingestion fails if text section doesn't have a name [\#464](https://github.com/ManifoldScholar/manifold/issues/464)
- HP Projects list should be paginated [\#454](https://github.com/ManifoldScholar/manifold/issues/454)
- When typekit is disabled, read button wraps [\#453](https://github.com/ManifoldScholar/manifold/issues/453)
- HP Featured projects block shouldn't appear if there are no featured projects [\#452](https://github.com/ManifoldScholar/manifold/issues/452)
- Overlap on see more projects button [\#444](https://github.com/ManifoldScholar/manifold/issues/444)
- Checkboxes in user \(and maker?\) lists don't do anything.  [\#441](https://github.com/ManifoldScholar/manifold/issues/441)
- Frontend dropdown styles aren't right in Firefox. [\#439](https://github.com/ManifoldScholar/manifold/issues/439)
- Saving settings clears all but changed fields [\#438](https://github.com/ManifoldScholar/manifold/issues/438)
- Commenting on a resource requires a reload before the comment is visible [\#435](https://github.com/ManifoldScholar/manifold/issues/435)
- Render error in SlideshowCaption [\#433](https://github.com/ManifoldScholar/manifold/issues/433)
- Dropdown arrows are misaligned; Browser dropdown shows [\#432](https://github.com/ManifoldScholar/manifold/issues/432)
- Text ingestion cancel doesn't work [\#415](https://github.com/ManifoldScholar/manifold/issues/415)
- Unfollowing a project throws an exception. [\#412](https://github.com/ManifoldScholar/manifold/issues/412)
- GDoc Encoding Error [\#409](https://github.com/ManifoldScholar/manifold/issues/409)
- Long titles break event layout [\#401](https://github.com/ManifoldScholar/manifold/issues/401)
- Viewing a resource in the reader resets the scroll position. [\#381](https://github.com/ManifoldScholar/manifold/issues/381)
- The user should be notified when there is a failed websocket connection. [\#351](https://github.com/ManifoldScholar/manifold/issues/351)
- Highlighting near the reader fade highlights entire top portion [\#255](https://github.com/ManifoldScholar/manifold/issues/255)

**Other Revisions**

- Manifold CLI \(rake\) interface needs to be cleaned up [\#552](https://github.com/ManifoldScholar/manifold/issues/552)
- Puppet manifests need some love [\#550](https://github.com/ManifoldScholar/manifold/issues/550)
- Switch style linting to Stylelint [\#545](https://github.com/ManifoldScholar/manifold/issues/545)
- Add tests for the frontend user create components [\#461](https://github.com/ManifoldScholar/manifold/issues/461)
- Replace Social component with compatible version [\#418](https://github.com/ManifoldScholar/manifold/issues/418)
- Add reader meta overlay "About this Text" [\#601](https://github.com/ManifoldScholar/manifold/issues/601)
- Prevent API logging of base64 encoded uploads [\#528](https://github.com/ManifoldScholar/manifold/issues/528)
- Invalid ingestion source attachments break ingestion. [\#521](https://github.com/ManifoldScholar/manifold/issues/521)

**Accepted Pull Requests**

- \[F\] Manifold supports SSL [\#632](https://github.com/ManifoldScholar/manifold/pull/632) ([zdavis](https://github.com/zdavis))
- \[F\] Notify user of failed websocket connection [\#616](https://github.com/ManifoldScholar/manifold/pull/616) ([zdavis](https://github.com/zdavis))
- \[B\] Correct regresion in ingestion uploading [\#614](https://github.com/ManifoldScholar/manifold/pull/614) ([zdavis](https://github.com/zdavis))
- \[B\] Fix project sorting in two places [\#613](https://github.com/ManifoldScholar/manifold/pull/613) ([zdavis](https://github.com/zdavis))
- \[B\] Improve ingestion UX [\#608](https://github.com/ManifoldScholar/manifold/pull/608) ([zdavis](https://github.com/zdavis))
- \[B\] Correct session restoration when SSR is missing. [\#606](https://github.com/ManifoldScholar/manifold/pull/606) ([zdavis](https://github.com/zdavis))
- \[F\] Improve feature layout capabilities [\#602](https://github.com/ManifoldScholar/manifold/pull/602) ([zdavis](https://github.com/zdavis))
- \[C\] Refactor client script organization; deployment [\#600](https://github.com/ManifoldScholar/manifold/pull/600) ([zdavis](https://github.com/zdavis))
- \[C\] Replace SCSS-Lint with Stylelint [\#597](https://github.com/ManifoldScholar/manifold/pull/597) ([zdavis](https://github.com/zdavis))
- \[F\] Admins can manage page and feature content [\#588](https://github.com/ManifoldScholar/manifold/pull/588) ([zdavis](https://github.com/zdavis))
- \[C\] Reorganize rake tasks; move cap tasks [\#569](https://github.com/ManifoldScholar/manifold/pull/569) ([zdavis](https://github.com/zdavis))
- \[F\] Improve and refactor Node client servers. [\#544](https://github.com/ManifoldScholar/manifold/pull/544) ([zdavis](https://github.com/zdavis))
- \[F\] EPUB Ingestion bugfixes and improvements [\#524](https://github.com/ManifoldScholar/manifold/pull/524) ([zdavis](https://github.com/zdavis))
- \[B\] Strip normal font weights during ingestion [\#508](https://github.com/ManifoldScholar/manifold/pull/508) ([zdavis](https://github.com/zdavis))
- \[B\] Correct event urls [\#500](https://github.com/ManifoldScholar/manifold/pull/500) ([zdavis](https://github.com/zdavis))
- \[F\] List all highlights and annotations for a given text [\#497](https://github.com/ManifoldScholar/manifold/pull/497) ([zdavis](https://github.com/zdavis))
- \[B\] Extract styles to css file in prod build [\#493](https://github.com/ManifoldScholar/manifold/pull/493) ([zdavis](https://github.com/zdavis))
- \[C\] Adjust deployment approach [\#486](https://github.com/ManifoldScholar/manifold/pull/486) ([zdavis](https://github.com/zdavis))
- \[B\] Correct ingestion regressions [\#481](https://github.com/ManifoldScholar/manifold/pull/481) ([zdavis](https://github.com/zdavis))
- \[B\] Squish TextSection title in epub ingestion [\#446](https://github.com/ManifoldScholar/manifold/pull/446) ([zdavis](https://github.com/zdavis))
- \[B\] Fix SSR fetchData regression [\#436](https://github.com/ManifoldScholar/manifold/pull/436) ([zdavis](https://github.com/zdavis))
- \[B\] Correct ingestion cancel button behavior [\#431](https://github.com/ManifoldScholar/manifold/pull/431) ([zdavis](https://github.com/zdavis))
- \[C\] Add prettier; update eslint; lint all the things [\#429](https://github.com/ManifoldScholar/manifold/pull/429) ([zdavis](https://github.com/zdavis))
- \[C\] Speed up client tests on Travis [\#428](https://github.com/ManifoldScholar/manifold/pull/428) ([zdavis](https://github.com/zdavis))
- \[F\] Update Webpack and Babel; improve client tests [\#421](https://github.com/ManifoldScholar/manifold/pull/421) ([zdavis](https://github.com/zdavis))
- \[F\] Admins can create new user accounts [\#413](https://github.com/ManifoldScholar/manifold/pull/413) ([SMaxOwok](https://github.com/SMaxOwok))

## [v0.2.0](https://github.com/ManifoldScholar/manifold/tree/v0.2.0) (06/20/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.1.3...v0.2.0)

**Features**

- All ingestion strategies can support a .zip or a directory [\#398](https://github.com/ManifoldScholar/manifold/issues/398)
- Backend users can edit text stylesheets [\#367](https://github.com/ManifoldScholar/manifold/issues/367)
- Manifold can ingest a single HTML file as a text [\#360](https://github.com/ManifoldScholar/manifold/issues/360)
- Manifold supports Node 6.10.x [\#343](https://github.com/ManifoldScholar/manifold/issues/343)
- Render a consistently styled confirmation box when leaving unsaved forms [\#309](https://github.com/ManifoldScholar/manifold/issues/309)
- Add keyboard inputs to all modal dialogs [\#302](https://github.com/ManifoldScholar/manifold/issues/302)
- Backend users can create, update, edit, and delete resource collections [\#281](https://github.com/ManifoldScholar/manifold/issues/281)
- Youtube and Vimeo resources import thumbnails from providers [\#278](https://github.com/ManifoldScholar/manifold/issues/278)
- React-router updated from 2.x to 4.x [\#276](https://github.com/ManifoldScholar/manifold/issues/276)
- Manifold renders sensible fallback fonts when Typekit is not enabled [\#274](https://github.com/ManifoldScholar/manifold/issues/274)
- Backend text ingestion user interface is more user friendly [\#273](https://github.com/ManifoldScholar/manifold/issues/273)
- Texts can be re-ingested [\#272](https://github.com/ManifoldScholar/manifold/issues/272)
- Readers can comment on resources [\#271](https://github.com/ManifoldScholar/manifold/issues/271)
- Backend users can configure a generic project avatar or upload a thumbnail [\#270](https://github.com/ManifoldScholar/manifold/issues/270)
- Readers can generate a citation \(MLA, APA, Chicago, etc.\) for the selected passage [\#269](https://github.com/ManifoldScholar/manifold/issues/269)
- Manifold utilizes Postgres JSONB field for storing text section content [\#258](https://github.com/ManifoldScholar/manifold/issues/258)
- Installation instructions are included in manifold/manifold-docs [\#245](https://github.com/ManifoldScholar/manifold/issues/245)

**Bugs**

- Markdown ingestion fails if there's no stylesheet [\#399](https://github.com/ManifoldScholar/manifold/issues/399)
- HTML ingestion fails if there is no \<style\> tag in the document head. [\#397](https://github.com/ManifoldScholar/manifold/issues/397)
- If an API request triggers a fatal error \(500 or 404\), client app should return the correct status code. [\#396](https://github.com/ManifoldScholar/manifold/issues/396)
- Following page crashes when not logged in [\#391](https://github.com/ManifoldScholar/manifold/issues/391)
- Link to resource detail from activity feed is incorrect and 404s [\#380](https://github.com/ManifoldScholar/manifold/issues/380)
- Deleting a resource should trigger deletion of associated resource annotations [\#379](https://github.com/ManifoldScholar/manifold/issues/379)
- Project thumbnail is stretched on frontend [\#378](https://github.com/ManifoldScholar/manifold/issues/378)
- Removing text should destroy "TEXT\_CREATED" event [\#374](https://github.com/ManifoldScholar/manifold/issues/374)
- Removing a resource annotation doesn't remove it from margin until page reload. [\#373](https://github.com/ManifoldScholar/manifold/issues/373)
- Missing margin in backend project detail form [\#370](https://github.com/ManifoldScholar/manifold/issues/370)
- Project avatar thumbnail field is missing margin [\#369](https://github.com/ManifoldScholar/manifold/issues/369)
- Text in google doc ingestion is too small and not responsive [\#368](https://github.com/ManifoldScholar/manifold/issues/368)
- Manifold reader appears to apply default paragraph margin of 0 [\#366](https://github.com/ManifoldScholar/manifold/issues/366)
- Press logo doesn't show in backend after its set. [\#365](https://github.com/ManifoldScholar/manifold/issues/365)
- Metadata header on project page should not appear if a project has no metadata. [\#364](https://github.com/ManifoldScholar/manifold/issues/364)
- Unable to update text title in backend [\#362](https://github.com/ManifoldScholar/manifold/issues/362)
- SSR mismatch when enabling download link in Slide.Caption [\#354](https://github.com/ManifoldScholar/manifold/issues/354)
- Empty collections slideshow should be adjusted or hidden [\#353](https://github.com/ManifoldScholar/manifold/issues/353)
- Inconsistent scale of social icons on project hero [\#341](https://github.com/ManifoldScholar/manifold/issues/341)
- Ingestion builder does not remove text sections during reingestion [\#338](https://github.com/ManifoldScholar/manifold/issues/338)
- ProjectDetail.Texts reordering isn't working [\#336](https://github.com/ManifoldScholar/manifold/issues/336)
- Project images are converted to jpegs, don't allow transparent backgrounds [\#335](https://github.com/ManifoldScholar/manifold/issues/335)
- Move annotation and resource fetching to refactored Section container [\#331](https://github.com/ManifoldScholar/manifold/issues/331)
- Improve responsive behavior of backend header delete/preview buttons [\#327](https://github.com/ManifoldScholar/manifold/issues/327)
- Improve responsive behavior of backend date field [\#326](https://github.com/ManifoldScholar/manifold/issues/326)
- Entering an invalid project or text URL should 404 [\#319](https://github.com/ManifoldScholar/manifold/issues/319)
- Updating metadata on texts \(in backend\) doesn't save [\#317](https://github.com/ManifoldScholar/manifold/issues/317)
- Managing contributors on texts seems not to work. [\#316](https://github.com/ManifoldScholar/manifold/issues/316)
- Style issues on users list [\#313](https://github.com/ManifoldScholar/manifold/issues/313)
- Investigate why Manifold can't ingest this google doc [\#311](https://github.com/ManifoldScholar/manifold/issues/311)
- Typekit fonts should load \(if configured\) when SSR is absent [\#310](https://github.com/ManifoldScholar/manifold/issues/310)
- Footer text nav has incorrect top margin [\#308](https://github.com/ManifoldScholar/manifold/issues/308)
- Tags in dropdowns should be sorted alphabetically [\#307](https://github.com/ManifoldScholar/manifold/issues/307)
- Component FetchData methods should not be triggered by URL hash changes [\#304](https://github.com/ManifoldScholar/manifold/issues/304)
- Vertical alignment of mobile backend secondary nav is off by a few pixels [\#303](https://github.com/ManifoldScholar/manifold/issues/303)
- Model filter loses scope after validating paginated results [\#299](https://github.com/ManifoldScholar/manifold/issues/299)
- Variance in backend resource icon size [\#294](https://github.com/ManifoldScholar/manifold/issues/294)
- Backend project nav clips on smaller screens [\#293](https://github.com/ManifoldScholar/manifold/issues/293)
- Modal dialog buttons are missing a hover state [\#291](https://github.com/ManifoldScholar/manifold/issues/291)
- Changing pages in resources list breaks filters [\#288](https://github.com/ManifoldScholar/manifold/issues/288)
- Collection resource count shows all resources in project [\#287](https://github.com/ManifoldScholar/manifold/issues/287)
- Visibility nav overlaps TOC in reader \(on mobile screen\) [\#284](https://github.com/ManifoldScholar/manifold/issues/284)
- Form upload component does not remove attachment [\#266](https://github.com/ManifoldScholar/manifold/issues/266)
- Improve scroll behavior on route change [\#264](https://github.com/ManifoldScholar/manifold/issues/264)
- Filtering resource collections doesn't update URL params [\#257](https://github.com/ManifoldScholar/manifold/issues/257)
- Resource preview doesn't update when resource cube is highlighted in Firefox [\#256](https://github.com/ManifoldScholar/manifold/issues/256)
- Remove excess left margin in backend entity header [\#254](https://github.com/ManifoldScholar/manifold/issues/254)
- Add &rel=0 to Youtube video URLs to prevent related videos from displaying [\#253](https://github.com/ManifoldScholar/manifold/issues/253)
- Marginal resource thumbnails aren't displaying until hovering over the icon [\#252](https://github.com/ManifoldScholar/manifold/issues/252)
- Backend resource search input submit does not preventDefault [\#251](https://github.com/ManifoldScholar/manifold/issues/251)
- Issues parsing Manifold-Docs TOC [\#248](https://github.com/ManifoldScholar/manifold/issues/248)
- Ingesting Markdown Files fails if the sources include a zero k file. [\#247](https://github.com/ManifoldScholar/manifold/issues/247)
- CSS Validator throws an exception with invalid CSS [\#246](https://github.com/ManifoldScholar/manifold/issues/246)

**Accepted Pull Requests**

- \[F\] Refactor and improve ingestion; add specs [\#400](https://github.com/ManifoldScholar/manifold/pull/400) ([zdavis](https://github.com/zdavis))
- \[F\] Backend users can manage text stylesheets [\#395](https://github.com/ManifoldScholar/manifold/pull/395) ([zdavis](https://github.com/zdavis))
- \[B\] Make followed projects into a component [\#394](https://github.com/ManifoldScholar/manifold/pull/394) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Correct ProjectDetailGeneral test [\#386](https://github.com/ManifoldScholar/manifold/pull/386) ([zdavis](https://github.com/zdavis))
- \[B\] Fix missing margin in BackendProjectDetail form [\#377](https://github.com/ManifoldScholar/manifold/pull/377) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix Ruby linting issues [\#375](https://github.com/ManifoldScholar/manifold/pull/375) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Allow text title to be set in backend [\#363](https://github.com/ManifoldScholar/manifold/pull/363) ([zdavis](https://github.com/zdavis))
- \[F\] Add HTML ingestion strategy [\#361](https://github.com/ManifoldScholar/manifold/pull/361) ([zdavis](https://github.com/zdavis))
- \[B\] Makes date form field responsive [\#359](https://github.com/ManifoldScholar/manifold/pull/359) ([blnkt](https://github.com/blnkt))
- \[C\] Improve react-server console messages [\#358](https://github.com/ManifoldScholar/manifold/pull/358) ([zdavis](https://github.com/zdavis))
- \[B\] Destroy stale text sections on reingestion [\#357](https://github.com/ManifoldScholar/manifold/pull/357) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Enable download link and fix SSR mismatch [\#356](https://github.com/ManifoldScholar/manifold/pull/356) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Add fallback fonts [\#350](https://github.com/ManifoldScholar/manifold/pull/350) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix issue with project text position not updating [\#349](https://github.com/ManifoldScholar/manifold/pull/349) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Enable keyboard controls for modals [\#348](https://github.com/ManifoldScholar/manifold/pull/348) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix manifold attachments to preserve transparency [\#347](https://github.com/ManifoldScholar/manifold/pull/347) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Add snapshot tests for container components [\#346](https://github.com/ManifoldScholar/manifold/pull/346) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Upgrade Node to v6.10.3 [\#344](https://github.com/ManifoldScholar/manifold/pull/344) ([zdavis](https://github.com/zdavis))
- \[B\] Fix social icon sizing on project detail hero [\#342](https://github.com/ManifoldScholar/manifold/pull/342) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Footer text nav has incorrect top margin [\#340](https://github.com/ManifoldScholar/manifold/pull/340) ([naomiyaki](https://github.com/naomiyaki))
- \[F\] Improve ingestion UX; allow text reingestion [\#339](https://github.com/ManifoldScholar/manifold/pull/339) ([zdavis](https://github.com/zdavis))
- \[B\] Fixes issue with a text's contributors/authors not updating [\#337](https://github.com/ManifoldScholar/manifold/pull/337) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Add project avatar selector to backend project view [\#334](https://github.com/ManifoldScholar/manifold/pull/334) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Correct firefox resource icon hover in FF [\#333](https://github.com/ManifoldScholar/manifold/pull/333) ([zdavis](https://github.com/zdavis))
- \[B\] Correct router refactor annotation regression [\#332](https://github.com/ManifoldScholar/manifold/pull/332) ([zdavis](https://github.com/zdavis))
- \[F\] Implement reader passage citation generator [\#330](https://github.com/ManifoldScholar/manifold/pull/330) ([zdavis](https://github.com/zdavis))
- \[B\] Move reader visibility to footer on mobile [\#324](https://github.com/ManifoldScholar/manifold/pull/324) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Make BE secondary nav scrollable [\#323](https://github.com/ManifoldScholar/manifold/pull/323) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Bump active background on BE list to the right [\#322](https://github.com/ManifoldScholar/manifold/pull/322) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Remove generic \<span\> styles in entity header [\#321](https://github.com/ManifoldScholar/manifold/pull/321) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Fix alignment in backend secondary nav [\#320](https://github.com/ManifoldScholar/manifold/pull/320) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Add hover states to modal buttons [\#318](https://github.com/ManifoldScholar/manifold/pull/318) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix variance in backend list icon size [\#315](https://github.com/ManifoldScholar/manifold/pull/315) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Sort resource tags alphabetically [\#314](https://github.com/ManifoldScholar/manifold/pull/314) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Ensure valid UTF-8 encoding for google doc ingestion [\#312](https://github.com/ManifoldScholar/manifold/pull/312) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Add tests for components [\#305](https://github.com/ManifoldScholar/manifold/pull/305) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Maintain scope for paginated result sets [\#301](https://github.com/ManifoldScholar/manifold/pull/301) ([zdavis](https://github.com/zdavis))
- \[F\] Implement comments on resource detail [\#296](https://github.com/ManifoldScholar/manifold/pull/296) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Add job to fetch external video thumbnails [\#295](https://github.com/ManifoldScholar/manifold/pull/295) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Marginal resource thumbnails aren't displaying until hovering over the icon [\#292](https://github.com/ManifoldScholar/manifold/pull/292) ([zdavis](https://github.com/zdavis))
- \[B\] Fix resource count for collections [\#290](https://github.com/ManifoldScholar/manifold/pull/290) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix resource pagination losing filters [\#289](https://github.com/ManifoldScholar/manifold/pull/289) ([SMaxOwok](https://github.com/SMaxOwok))
- \[C\] Merge development fixes to master [\#279](https://github.com/ManifoldScholar/manifold/pull/279) ([zdavis](https://github.com/zdavis))
- \[B\] Correct attachment upload removal behavior [\#268](https://github.com/ManifoldScholar/manifold/pull/268) ([zdavis](https://github.com/zdavis))
- \[F\] Append collection resource filters as url params [\#265](https://github.com/ManifoldScholar/manifold/pull/265) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix ingestion of serialized body nodes [\#263](https://github.com/ManifoldScholar/manifold/pull/263) ([scryptmouse](https://github.com/scryptmouse))
- \[B\] Don't show related videos in youtube player [\#262](https://github.com/ManifoldScholar/manifold/pull/262) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Convert `TextSection\#body\_json` to JSONB [\#261](https://github.com/ManifoldScholar/manifold/pull/261) ([scryptmouse](https://github.com/scryptmouse))
- \[F\] Improve CSS Validator parsing [\#260](https://github.com/ManifoldScholar/manifold/pull/260) ([zdavis](https://github.com/zdavis))
- \[F\] Minor Markdown ingestion improvements [\#259](https://github.com/ManifoldScholar/manifold/pull/259) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Update project README [\#250](https://github.com/ManifoldScholar/manifold/pull/250) ([zdavis](https://github.com/zdavis))
- \[F\] Update Project README [\#249](https://github.com/ManifoldScholar/manifold/pull/249) ([zdavis](https://github.com/zdavis))
- \[F\] Add toggleable filters to backend search [\#232](https://github.com/ManifoldScholar/manifold/pull/232) ([SMaxOwok](https://github.com/SMaxOwok))

## [v0.1.3](https://github.com/ManifoldScholar/manifold/tree/v0.1.3) (04/13/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.1.2...v0.1.3)

**Bugs**

- Recent event CSS changes broke mobile event layout [\#241](https://github.com/ManifoldScholar/manifold/issues/241)

**Other Revisions**

- Missing Favicon in production env. [\#242](https://github.com/ManifoldScholar/manifold/issues/242)

**Accepted Pull Requests**

- \[B\] Fix events list responsive regressions [\#244](https://github.com/ManifoldScholar/manifold/pull/244) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Add root dir detection in Gitbook ingestion [\#243](https://github.com/ManifoldScholar/manifold/pull/243) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Add support for OAuth authentication [\#208](https://github.com/ManifoldScholar/manifold/pull/208) ([scryptmouse](https://github.com/scryptmouse))

## [v0.1.2](https://github.com/ManifoldScholar/manifold/tree/v0.1.2) (04/08/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.1.1...v0.1.2)

**Features**

- Editors can manage project events in the backend [\#285](https://github.com/ManifoldScholar/manifold/issues/285)

**Bugs**

- Night mode renders user links as white in the annotation drawer [\#226](https://github.com/ManifoldScholar/manifold/issues/226)

**Accepted Pull Requests**

- \[F\]  Editors can manage project events in the backend [\#286](https://github.com/ManifoldScholar/manifold/pull/286) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Fix upload display in FF/Safari [\#240](https://github.com/ManifoldScholar/manifold/pull/240) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Fix Statistics caching / fetching [\#239](https://github.com/ManifoldScholar/manifold/pull/239) ([scryptmouse](https://github.com/scryptmouse))
- \[B\] Fix popup position in Firefox [\#238](https://github.com/ManifoldScholar/manifold/pull/238) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Remove text transition on resource previews [\#237](https://github.com/ManifoldScholar/manifold/pull/237) ([naomiyaki](https://github.com/naomiyaki))
- \[C\] Add Changelog to project [\#236](https://github.com/ManifoldScholar/manifold/pull/236) ([zdavis](https://github.com/zdavis))
- \[B\] Fix backend drawer scroll-to-bottom [\#235](https://github.com/ManifoldScholar/manifold/pull/235) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Fix mismatched resource icons [\#234](https://github.com/ManifoldScholar/manifold/pull/234) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Address lingering resource sub-kind issues [\#233](https://github.com/ManifoldScholar/manifold/pull/233) ([SMaxOwok](https://github.com/SMaxOwok))

## [v0.1.1](https://github.com/ManifoldScholar/manifold/tree/v0.1.1) (04/06/2017)
[Full Changelog](https://github.com/ManifoldScholar/manifold/compare/v0.1.0...v0.1.1)

**Features**

- Resource card tags should link to filtered resource list [\#572](https://github.com/ManifoldScholar/manifold/issues/572)

**Bugs**

- The toggle on the light and dark schemes on touch displays requires two taps [\#225](https://github.com/ManifoldScholar/manifold/issues/225)

**Accepted Pull Requests**

- \[F\] Upgrade react-router to v4; refactor fetchData [\#329](https://github.com/ManifoldScholar/manifold/pull/329) ([zdavis](https://github.com/zdavis))
- \[F\] Allow admin to change a user's role [\#231](https://github.com/ManifoldScholar/manifold/pull/231) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Reset default text color in dark reading mode [\#230](https://github.com/ManifoldScholar/manifold/pull/230) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Fix BG color on highlighted resource markers [\#222](https://github.com/ManifoldScholar/manifold/pull/222) ([SMaxOwok](https://github.com/SMaxOwok))
- \[B\] Only show FE mobile nav when logged in [\#221](https://github.com/ManifoldScholar/manifold/pull/221) ([naomiyaki](https://github.com/naomiyaki))
- \[B\] Correct pagination, slideshow nav, and BE form [\#220](https://github.com/ManifoldScholar/manifold/pull/220) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Store formatted attributes in Redis [\#219](https://github.com/ManifoldScholar/manifold/pull/219) ([scryptmouse](https://github.com/scryptmouse))
- \[F\] Improve project event list functionality [\#218](https://github.com/ManifoldScholar/manifold/pull/218) ([SMaxOwok](https://github.com/SMaxOwok))
- \[F\] Add sub\_kind property to resources [\#204](https://github.com/ManifoldScholar/manifold/pull/204) ([SMaxOwok](https://github.com/SMaxOwok))

## [v0.1.0](https://github.com/ManifoldScholar/manifold/tree/v0.1.0) (2017-04-04)

Initial Release: A Manifold is Born!


\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*
