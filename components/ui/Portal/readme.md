# Name

Portal

# Description

The Portal component lets you render its children into a DOM node that exists
outside of the Portal's own DOM hierarchy.

# Props

setShowModal - function to change state children - the content to be rendered
inside the element.

# Examples

```tsx
const Example = () => {
  const [showModal, setShowModal] = useState(false);
  const [typeContent, setTypeContent] = useState("");

  const onModalClose = () => setShowModal(false);
  const onModalOpen = ()=> setShowModal(true)


  return (
    <>
      <button onClick={) => {
        onModalOpen();
        setTypeContent("basket")
      }}> Show modal </button>

          <Portal onModalClose={onModalClose} showModal={showModal}>
            <ModalWindow className="text-black" onModalClose={onModalClose} showModal={showModal}>
              {typeContent === "basket" && <div className="h-[200px] ">content of basket</div>}
              {typeContent === "contract" && <div className="h-[800px] ">content of contract</div>}
              {typeContent === "guarantees" && <div>content of guarantees</div>}
              {typeContent === "delivery " && <div>content of delivery</div>}
              {typeContent === "rules " && <div>content of rules</div>}
            </ModalWindow>
          </Portal>
      )}
    </>
  );
};
```
